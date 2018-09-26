import Request from "../utils/Request";

export default class CategoryService{
    getAll(){
        return Request.make("GET", "categories");
    }
    getOne(id){
        return Request.make("GET", `categories/${id}`);
    }
    delete(id){
        return Request.make("DELETE", `categories/${id}`);
    }
    insert(data){
        return Request.make("POST", `categories`, data);
    }

}