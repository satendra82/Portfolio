# ---- build stage ----
FROM eclipse-temurin:25-jdk AS build
WORKDIR /app

COPY mvnw pom.xml ./
COPY .mvn .mvn
RUN sed -i 's/\r$//' mvnw && chmod +x mvnw
RUN ./mvnw dependency:go-offline -B

COPY src src
RUN ./mvnw clean package -DskipTests -B

# ---- runtime stage ----
FROM eclipse-temurin:25-jre
WORKDIR /app

RUN useradd -r -u 1001 appuser
COPY --from=build /app/target/*.jar app.jar
USER appuser

EXPOSE 8080
CMD ["sh", "-c", "java -XX:MaxRAMPercentage=75 -jar app.jar --server.port=${PORT:-8080}"]
