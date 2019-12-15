import axios from 'axios'
import defaultConfig from '../config'

var config = {
    headers: {'Access-Control-Allow-Origin': '*'}
};

export default class clientApi {

    /**
     * get posts
     * @param {number} limit
     */
    static getPosts(limit) {
        if(limit > 0) {
            return axios.get(`${defaultConfig.siteUrl}/wp-json/wp/v2/posts?per_page=${limit}`, config)
        }
        return axios.get(`${defaultConfig.siteUrl}/wp-json/wp/v2/posts`)
    }

    /**
     * get post
     * @param {string} slug
     */
    static getPost(slug) {
        return axios.get(`${defaultConfig.siteUrl}/wp-json/wp/v2/posts?slug=${slug}`)
    }

    /**
     * get pages
     * @param {number} limit
     */
    static getPages(limit) {
        if(limit > 0) {
            return axios.get(`${defaultConfig.siteUrl}/wp-json/wp/v2/pages?per_page=${limit}`)
        }
        return axios.get(`${defaultConfig.siteUrl}/wp-json/wp/v2/pages`)
    }

    /**
     * get menus
     */
    static getMenus() {
        return resp = axios.get(`${defaultConfig.siteUrl}/wp-json/menus/v1/menus`) 
    }

    /**
     * get menu
     */
    static getMenu(slug) {
        return axios.get( `${defaultConfig.siteUrl}/wp-json/menus/v1/menus/${slug}`)
    }
}