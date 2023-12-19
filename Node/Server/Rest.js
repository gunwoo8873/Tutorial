const express = require('express')
const app = express()
app.listen(52273, () => { console.log('http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst'); })
app.use(express.urlencoded ({ extended: false }))

// user 카운트를 Defualt값인 0으로 지정
const userCounter = 0;
// DB를 만들지 않고 단순 여러 user 정보를 저장
const users = []

app.get(`/user`, (req, res) => {
    res.send(users)
})

// get = 데이터를 조회할때 사용
app.get(`/user/:id`, (req, res) => {
    const id = req.params.id
    const filtered = users.filter((user) => user.id == id)

    if (filtered.length == 1) {res.send (filtered[0])}
    // filtered 기준에 맞는 데이터가 없다면 404 클라이언트 에러
    else req.status(404).send('Data Error')
})

// 찾을 데이터 생성 및 검색
app.get('/user', (req, res) => {
    const body = req.body

    // 추가할 user의 데이터 정의
    const name = body.name
    const region = body.region
    const data = {id : userCounter++, name: name, region : region}

    user.push(data)
    res.send()

    if (!body.name) {return req.status(404).send('Input {Name} to Enter')}
    else if (!body.region) {return res.status(404).send('region to Enter')}
})

// 찾은 user의 데이터 및 저장
app.post(`/user/:id`, (req, res) => {
    const body = req.body
    const id = req.params.id
    const user = users.find((user) => user.id == id)

    if (user) {
        if (res.body.name) { users[id].name = req.body.name }
        if (res.body.region) { users[id].region = req.body.region } res.send(user)
    } else res.status(404).send('region to Enter')
})

// 데이터 삭제
app.delete(`/user/:id`, (req, res) => {
    const id = req.params.id
    const index = users.findIndex((user) => user.id == id)

    if (index != -1) {users.splice(index, 1)}
    else res.status(404).send('delete to Enter')
})