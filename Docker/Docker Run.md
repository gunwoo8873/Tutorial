### 1. Docker Main Container run
```docker
docker container run diamol/ch02-hello-diamol
```

### 1.1 ch02-hello-diamol 라는 패키지가 없을 경우 내려 받는다.

결과1
```docker
latest: Pulling from diamol/ch02-hello-diamol
31603596830f: Pull complete
93931504196e: Pull complete
d7b1f3678981: Pull complete
Digest: sha256:c4f45e04025d10d14d7a96df2242753b925e5c175c3bea9112f93bf9c55d4474
Status: Downloaded newer image for diamol/ch02-hello-diamol:latest
```

### 1.2 Docker Package Output 패키지를 사용해 Container를 실행한다
> 윈도우나 맥에서 실행되는 환경에 따라 Im running on의 실행 버전이 달라진다.

결과2
```docker
---------------------
Hello from Chapter 2!
---------------------
My name is:
e305efe65401
---------------------
Im running on:
Linux 5.15.133.1-microsoft-standard-WSL2 x86_64
---------------------
My address is:
inet addr:- Bcast:- Mask:-
```

---

### 2. 컨테이너에 접속
```docker
docker container run --interactive --tty diamol/base
```

| Option | Description |
| ---- | ---- |
| `--iteractive`| 컨테이너에 접속된 상태 |
| `--tty`| 터미널 세션을 통해 컨테이너를 조작 |

결과1
```docker
Unable to find image 'diamol/base:latest' locally
latest: Pulling from diamol/base
31603596830f: Already exists
792f5419a843: Pull complete
Digest: sha256:787fe221a14f46b55e224ea0436aca77d345c3ded400aaf6cd40125e247f35c7
Status: Downloaded newer image for diamol/base:latest
```

### 2.1 컨테이너 실행 리스트 (List)
> 원격 컨테이너 접속 상태 유지 한 상태에서 새 콘솔창으로 실행중인 컨테이너 목록을 불러온다

```docker
docker container ls
```
| Option | Description |
| ---- | ---- |
| `Non` | 실행중인 컨테이너 목록 출력 |
| `--all`| 모든 컨테이너 목록 출력 |

결과
```docker
// Non
CONTAINER ID   IMAGE         COMMAND     CREATED        STATUS        PORTS     NAMES
ea87ae461a9e   diamol/base   "/bin/sh"   10 hours ago   Up 10 hours             vigorous_shirley
b5e3bad8bd98   diamol/base   "/bin/sh"   10 hours ago   Up 2 hours              naughty_tesla
```
```docker
// --all
CONTAINER ID   IMAGE                      COMMAND                 CREATED        STATUS                   PORTS     NAMES
ea87ae461a9e   diamol/base                "/bin/sh"               10 hours ago   Up 10 hours                        vigorous_shirley
b5e3bad8bd98   diamol/base                "/bin/sh"               10 hours ago   Up 2 hours                         naughty_tesla
e305efe65401   diamol/ch02-hello-diamol   "/bin/sh -c ./cmd.sh"   32 hours ago   Exited (0) 2 hours ago             peaceful_lamarr
```

### 2.2 컨테이너 실행중인 프로세스 (top)
```docker
docker container top Container ID [ea87ae461a9e or ea]
```
결과
```docker
UID                 PID                 PPID                C                   STIME               TTY                 TIME                CMD
root                22990               22971               0                   01:23               ?                   00:00:00            /bin/sh
root                62411               22971               0                   05:12               ?                   00:00:00            /bin/sh
```

### 2.3 컨테이너의 수집된 로그 (logs)
> 컨테이너의 명령한 로그가 저장되어 출력한다
```docker
docker container logs Container ID [ea87ae461a9e or ea]
```

### 2.4 컨테이너 상세 정보 (inspect)
> 가상의 네트워크 상태를 확인하거나 컨테이너를 다루거나 애플리케이션에 일어난 일을 찾고 해결하기 위한 명령어
```docker
docker container inspect Container ID [ea87ae461a9e or ea]
```
결과
```docker
[
    {
        "Id": "ea87ae461a9effd849917246640cd7a75887cdb726cc40ab79cec371436e790c",
        "Created": "2023-11-17T21:26:34.93661546Z",
        "Path": "/bin/sh",
        "Args": [],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 22990,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2023-11-17T21:26:35.160912928Z",
            "FinishedAt": "0001-01-01T00:00:00Z"
        } ...
```