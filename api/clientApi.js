import axios from 'axios'
import defaultConfig from '../config'

var config = {
    headers: {'Access-Control-Allow-Origin': '*'}
};

export default class clientApi {

    /**
     * get Posts
     * @param {number} limit
     */
    static getPosts(limit) {
        if(limit > 0) {
            return axios.get(`${defaultConfig.siteUrl}/wp-json/wp/v2/posts?per_page=${limit}`, config)
        }
        return axios.get(`${defaultConfig.siteUrl}/wp-json/wp/v2/posts`)
    }

    /**
     * get Post
     * @param {string} slug
     */
    static getPost(slug) {
        return axios.get(`${defaultConfig.siteUrl}/wp-json/wp/v2/posts?slug=${slug}`)
    }

    /**
     * get Bons Plans
     * @param {number} limit
     */
    static getBonsPlans(limit) {
        if (limit > 0) {
            return axios.get(`${defaultConfig.siteUrl}/wp-json/wp/v2/bons_plans?per_page=${limit}`, config)
        }
        return axios.get(`${defaultConfig.siteUrl}/wp-json/wp/v2/bons_plans`)
    }

    /**
     * get Bon Plan
     * @param {string} slug
     */
    static getBonPlan(slug) {
        return axios.get(`${defaultConfig.siteUrl}/wp-json/wp/v2/bons_plans?slug=${slug}`)
    }

    /**
     * get Pages
     * @param {number} limit
     */
    static getPages(limit) {
        if(limit > 0) {
            return axios.get(`${defaultConfig.siteUrl}/wp-json/wp/v2/pages?per_page=${limit}`)
        }
        return axios.get(`${defaultConfig.siteUrl}/wp-json/wp/v2/pages`)
    }

    /**
     * get Page
     * @param {number} id
     */
    static getPage(id) {
        return axios.get(`${defaultConfig.siteUrl}/wp-json/wp/v2/pages?id=${id}`)
    }

    /**
     * get menus
     */
    static getMenus() {
        return axios.get(`${defaultConfig.siteUrl}/wp-json/menus/v1/menus`) 
    }

    /**
     * get menu
     * @param {string} slug
     */
    static getMenu(slug) {
        return axios.get( `${defaultConfig.siteUrl}/wp-json/menus/v1/menus/${slug}`)
    }
}