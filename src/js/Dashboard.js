export default class extends class {
    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return "";
    }
} {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Welcome back, Dom</h1>
            <p>
                Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
        `;
    }
}