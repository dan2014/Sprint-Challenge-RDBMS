const knex = require("knex");
const knexConfig = require("./knexfile");
const db = knex(knexConfig.development);

module.exports = {
    get:function(){
        const query = db("projects");
        return query;
    },
    getID:function(id){
        const query = db("projects").select().where("id",id).first();
        return query;
    },
    insert:function(name){
        const query =  db("projects").insert(name);
        return query;
    },
    update:function(id,name){
        const query =  db("projects").where({"projects_ID":id}).update({name});
        return query;
    },
    delete:function(id){
        const query =  db("projects").where({"projects_ID":id}).delete();
        return query;
    }
};