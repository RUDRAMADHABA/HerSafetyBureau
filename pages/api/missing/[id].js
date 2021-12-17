import nc from 'next-connect'
import cors from 'cors'
import morgan from 'morgan'
import dbConnect from '../../../utils/dbConnect'
import Missing from '../../../models/Missing'

dbConnect()

const handler = nc()
    .use(morgan('dev'))
    .use(cors())

    // get a specific record
    .get(async (req, res) => {
        try {
            const _id = req.query.id
            const missing = await Missing.findById(_id)
            res.status(200).json({ data: missing })
        } catch (error) {
            res.status(400).json({ success: false })
        }
    })

export default handler
