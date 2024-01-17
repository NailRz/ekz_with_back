const db = require('../db')
class PostController {
    async createPost(req,res) {
        const {title, body} = req.body
        const newPost = await db.query(`INSERT INTO post (title, body) values ($1, $2) RETURNING *`, [title, body])
        console.log(title, body)
        res.json(newPost.rows[0])
    }
    async getPosts(req,res) {
        const posts = await db.query('SELECT * FROM post')
        res.json(posts.rows)
    }
    async deletePost(req,res) {
        const id = req.params.id 
        const post = await db.query(`DELETE FROM post where id = $1`, [id])
        res.json(post.rows[0])
    }
}
module.exports = new PostController()