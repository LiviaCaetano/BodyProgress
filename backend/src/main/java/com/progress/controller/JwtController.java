package com.progress.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.progress.config.JWTUtil;

@RestController
@RequestMapping("/jwt")
public class JwtController {

	private final JWTUtil jwtUtil = new JWTUtil();

	@PostMapping("/generate")
	public Map<String, String> generateToken(@RequestBody Map<String, Object> payload) throws Exception {
		String token = jwtUtil.generateToken(payload, 60000); // 1 minuto
		Map<String, String> response = new HashMap<>();
		response.put("token", token);
		return response;
	}

	@PostMapping("/validate")
	public Map<String, Object> validateToken(@RequestBody Map<String, String> request) throws Exception {
		String token = request.get("token");
		boolean isValid = jwtUtil.validateToken(token);
		Map<String, Object> response = new HashMap<>();
		response.put("valid", isValid);
		return response;
	}
}
