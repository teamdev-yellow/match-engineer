# ベースイメージとしてJDKを使用
FROM openjdk:17-jdk-alpine

# Mavenのインストール
RUN apk add --no-cache maven

# 作業ディレクトリを設定
WORKDIR /app

# pom.xmlとsrcをコピー
COPY pom.xml .
COPY src ./src

# 依存関係を先にダウンロード
RUN mvn dependency:go-offline -B

# Mavenでパッケージをビルド
RUN mvn clean package

# DevTools用にホットリロードを有効にするため、target/classesをマウント
COPY target/classes /app/target/classes

# JARファイルをapp.jarにコピー
RUN cp target/backend-0.0.1-SNAPSHOT.jar app.jar

# app.jarを実行
CMD ["java", "-jar", "app.jar"]

