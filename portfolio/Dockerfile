FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app
COPY . .
RUN chmod +x gradlew
RUN ./gradlew wrapper --gradle-version 8.8
RUN ./gradlew build -x test
EXPOSE 8080
CMD ["java", "-jar", "build/libs/bt_confessions-0.0.1-SNAPSHOT.jar"]