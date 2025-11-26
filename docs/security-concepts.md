# Conceptos de seguridad

## rate-limit
Rate limiting limita la cantidad de peticiones que un cliente puede hacer en un tiempo. Evita abuso y ataques de fuerza bruta. Ejemplo: limitar intentos de login a 5 por minuto.

## CORS
Cross-Origin Resource Sharing controla qué orígenes (dominios) pueden hacer peticiones a nuestra API. Previene que cualquier web haga peticiones no autorizadas.

## JWT
JSON Web Tokens son tokens firmados que contienen un payload (ej: userId) y se usan para autenticar solicitudes sin mantener sesión en servidor. Contienen `exp` para expiración.

## Ejemplos de uso
- Rate-limit: `/auth/login` -> máximo 5 intentos por minuto.
- CORS: permitir solo `https://mi-frontend.example.com`.
- JWT: al logear, devolver token; luego usar Authorization: Bearer <token> en /tasks.
