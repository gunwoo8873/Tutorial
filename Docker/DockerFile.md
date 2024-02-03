# DockerFile
``` DockerFile
# FROM the Target Image Library
FROM diamol/node

# ENV = Docker Settings Environment => ENV Key = Value
# Dockerfile for App URL Target
ENV TARGET = "url"
ENV METHOD = "#"
ENV INTERVAL = "3000"

# Docker Container for System at Directory
# Liux Directory
WORKDIR /Docker
# Window Directory
WORKDIR C:\the\workdir\path

COPY App.js .

# Docker Runtime Application Setpup
CMD ["node", "/Docker/App.js"]
```