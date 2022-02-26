FROM grafana/k6
ENV HTTP_PROXY="proxy:8118"
ENV HTTPS_PROXY="proxy:8118"
WORKDIR /
COPY exterminatus.js /
EXPOSE 9050
EXPOSE 8118
CMD ["run", "--verbose", "exterminatus.js"]