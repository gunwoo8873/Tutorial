### 호스팅 (Hosting)

```docker
docker container run --detach --publish 8088:80 diamol/ch02-hello-diamol-web
```

| Option | Description |
| ---- | ---- |
| `--detach`| 컨테이너를 백그라운드 실행으로 Container ID를 출력 |
| `--publish`| 컨테이너의 Port를 Host 컴퓨터에 공개 `(public)` |

결과

```docker
CONTAINER ID   IMAGE                          COMMAND              CREATED         STATUS         PORTS                  NAMES
57212488176b   diamol/ch02-hello-diamol-web   "httpd-foreground"   4 minutes ago   Up 4 minutes   0.0.0.0:8088->80/tcp   compassionat
```
> `0.0.0.0:8088->80`/tcp => `8088번 포트`를 트래픽 컨테이너 `80번` 포트로 전달

---

### 컨테이너 상태 확인 (Stats)

```docker
docker container stats Container ID [57212488176b or 57]
``` 

### 컨테이너 삭제 (remove)

```docker
docker container rm Container ID [57212488176b or 57]
```

| Option | Description |
| ---- | ---- |
| `--force or --f`| 실행중인 컨테이너라도 삭제가 가능하다 |
| - | - |