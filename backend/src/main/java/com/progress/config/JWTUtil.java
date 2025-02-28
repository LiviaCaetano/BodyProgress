package com.progress.config;

import java.util.Base64;
import java.util.Map;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;

@Component
public class JWTUtil {
    private static final String SECRET_KEY = "ygdbcfpovi8rp0gfcvuy";
    private static final ObjectMapper objectMapper = new ObjectMapper();

    public String generateToken(Map<String, Object> payload, long expirationMillis) throws Exception {
        long nowMillis = System.currentTimeMillis();
        long expMillis = nowMillis + expirationMillis;
        payload.put("exp", expMillis);

        String headerJson = "{\"alg\":\"HS256\",\"typ\":\"JWT\"}";
        String header = Base64.getUrlEncoder().withoutPadding().encodeToString(headerJson.getBytes());
        String body = Base64.getUrlEncoder().withoutPadding().encodeToString(objectMapper.writeValueAsBytes(payload));
        String signature = sign(header + "." + body);

        return header + "." + body + "." + signature;
    }

    public boolean validateToken(String token) throws Exception {
        String[] parts = token.split("\\.");
        if (parts.length != 3) return false;

        String signature = sign(parts[0] + "." + parts[1]);
        if (!signature.equals(parts[2])) return false;

        String payloadJson = new String(Base64.getUrlDecoder().decode(parts[1]));
        Map<String, Object> payload = objectMapper.readValue(payloadJson, Map.class);

        if (payload.containsKey("exp")) {
            long exp = ((Number) payload.get("exp")).longValue();
            return System.currentTimeMillis() < exp;
        }
        return true;
    }

    private String sign(String data) throws Exception {
        Mac mac = Mac.getInstance("HmacSHA256");
        mac.init(new SecretKeySpec(SECRET_KEY.getBytes(), "HmacSHA256"));
        return Base64.getUrlEncoder().withoutPadding().encodeToString(mac.doFinal(data.getBytes()));
    }
}
