import axios from 'axios'
import defaultConfig from '../config'

const config = {
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
};

export default class clientApi {

    /**
     * get Posts
     * @param {number} limit
     */
    static getPosts(limit=15, offset=0) {
        return axios.get(`${defaultConfig.apiUrl}/wp-json/wp/v2/posts?per_page=${limit}&offset=${offset}`, config)
    }

    /**
     * get Post
     * @param {string} slug
     */
    static getPost(slug) {
        return axios.get(`${defaultConfig.apiUrl}/wp-json/wp/v2/posts?slug=${slug}`)
    }
    
    /**
     * get Comments of a post
     * @param {int} id
     */
    static getPostComment(id) {
        return axios.get(`${defaultConfig.apiUrl}/wp-json/wp/v2/comments?post=${id}`, config);
    }

    /**
     * get Pages
     * @param {number} limit
     */
    static getPages(limit) {
        if(limit > 0) {
            return axios.get(`${defaultConfig.apiUrl}/wp-json/wp/v2/pages?per_page=${limit}`)
        }
        return axios.get(`${defaultConfig.apiUrl}/wp-json/wp/v2/pages`)
    }

    /**
     * get Page
     * @param {string} slug
     */
    static getPage(slug) {
        return axios.get(`${defaultConfig.apiUrl}/wp-json/wp/v2/posts?slug=${slug}`, config)
    }

    /**
     * get menu
     * @param {string} slug
     */
    static getMenu(slug) {
        return axios.get( `${defaultConfig.apiUrl}/wp-json/menus/v1/menus/${slug}`)
    }

    /**
     * login
     * @param {string} username
     * @param {string} password
     */
    static login(username, password) {
        return axios.post( `${defaultConfig.apiUrl}/wp-json/jwt-auth/v1/token`, {
            username: username,
            password: password
        }, config)
    }

}