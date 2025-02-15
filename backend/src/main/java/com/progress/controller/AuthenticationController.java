package com.progress.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.progress.exception.PersonException;
import com.progress.services.AuthenticationServices;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    private final AuthenticationServices authenticationServices;

    public AuthenticationController(AuthenticationServices authenticationServices) {
        this.authenticationServices = authenticationServices;
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest request) {
        try {
            boolean authenticated = authenticationServices.authenticate(request.getUsername(), request.getPassword());
            
            System.out.println(request.getUsername());
            System.out.println(request.getPassword());
            
            
            if (authenticated) {
                return ResponseEntity.ok("Autenticado com sucesso");
            }
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuário ou senha incorreto");
        } catch (PersonException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro interno do servidor");
        }
    }

    public static class LoginRequest {
        private String username;
        private String password;

        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }
}
