import axios from "axios";

const url = '/api/post';

export default class API{

    // fetch all post from the backend
    static async getAllPost(){
        const res = await axios.get(url);
        return res.data;
    }

    // get single post by ID
    static async getPostByID(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }

    // create post
    static async addPost(post){
        const res = await axios.post(url,post);
        return res.data;
    }

    // update post by ID
    static async updatePost(id, post){
        const res = await axios.patch(`${url}/${id}`,post);
        return res.data;
    }

    // delete a post
    static async deletePost(id){
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}