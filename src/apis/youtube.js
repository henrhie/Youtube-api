import axios from "axios"

const KEY = "AIzaSyA9Is2p4mkURyBNVGAM7uDGHk9cKzgivCk";
const baseUrl = "https://www.googleapis.com/youtube/v3"

export default axios.create({
    baseURL : baseUrl,
    params : {
        part : "snippet",
        type : "video",
        maxResults : 10,
        key : KEY
    }
})