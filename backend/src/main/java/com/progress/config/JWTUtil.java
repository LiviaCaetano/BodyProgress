package com.progress.config;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Map;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import org.springframework.stereotype.Component;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component
public class JWTUtil {
	private static final Logger logger = LoggerFactory.getLogger(JWTUtil.class);

	private static final String SECRET_KEY = "ygdbcfpovi8rp0gfcvuy89734y5gdsf7d89gs6dg87fs6dg87s";

	private static final ObjectMapper objectMapper = new ObjectMapper();

	public String generateToken(Map<String, Object> payload, long expirationMillis) {
		try {
			long nowMillis = System.currentTimeMillis();
			long expMillis = nowMillis + expirationMillis;
			payload.put("exp", expMillis);

			String headerJson = "{\"alg\":\"HS256\",\"typ\":\"JWT\"}";
			String header = Base64.getUrlEncoder().withoutPadding()
					.encodeToString(headerJson.getBytes(StandardCharsets.UTF_8));
			String body = Base64.getUrlEncoder().withoutPadding()
					.encodeToString(objectMapper.writeValueAsBytes(payload));
			String signature = sign(header + "." + body);

			String token = header + "." + body + "." + signature;
			logger.info("Token generated successfully.");
			return token;
		} catch (Exception e) {
			logger.error("Error generating token: ", e);
			return null;
		}
	}

	@SuppressWarnings("unchecked")
	public boolean validateToken(String token) {
		try {
			if (token == null || token.trim().isEmpty()) {
				logger.warn("Token is empty or null!");
				return false;
			}

			String[] parts = token.split("\\.");
			if (parts.length != 3) {
				logger.warn("Token with invalid format!");
				return false;
			}

			String expectedSignature = sign(parts[0] + "." + parts[1]);
			if (!expectedSignature.equals(parts[2])) {
				logger.warn("Invalid signature!");
				return false;
			}

			String payloadJson = new String(Base64.getUrlDecoder().decode(parts[1]), StandardCharsets.UTF_8);
			Map<String, Object> payload = objectMapper.readValue(payloadJson, Map.class);

			if (!payload.containsKey("exp")) {
				logger.warn("Token with no expiration time!");
				return false;
			}

			long exp = ((Number) payload.get("exp")).longValue();
			if (System.currentTimeMillis() >= exp) {
				logger.warn("Expired token! Expiration: {}", exp);
				return false;
			}

			logger.info("Valid token!");
			return true;
		} catch (Exception e) {
			logger.error("Erro validating token: ", e);
			return false;
		}
	}

	@SuppressWarnings("unchecked")
	public Long getUserIdFromToken(String token) {
		try {
			if (!validateToken(token)) {
				return null;
			}

			String[] parts = token.split("\\.");
			String payloadJson = new String(Base64.getUrlDecoder().decode(parts[1]), StandardCharsets.UTF_8);
			Map<String, Object> payload = objectMapper.readValue(payloadJson, Map.class);

			if (payload.containsKey("personId")) {
				return ((Number) payload.get("personId")).longValue();
			} else {
				logger.warn("Token does not contain personId.");
				return null;
			}
		} catch (Exception e) {
			logger.error("Error extracting personId from token: ", e);
			return null;
		}
	}

	private String sign(String data) throws Exception {
		Mac mac = Mac.getInstance("HmacSHA256");
		mac.init(new SecretKeySpec(SECRET_KEY.getBytes(StandardCharsets.UTF_8), "HmacSHA256"));
		return Base64.getUrlEncoder().withoutPadding()
				.encodeToString(mac.doFinal(data.getBytes(StandardCharsets.UTF_8)));
	}
}
