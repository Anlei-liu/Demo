import express from 'express'

const apiRoutes = express.Router()

apiRoutes.route('/text')
    .get((req, res) => {
        console.log(12312312)
        res.status = 200
        res.send('123123')
    })

export default apiRoutes
