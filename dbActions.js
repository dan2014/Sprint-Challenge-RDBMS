const knex = require("knex");
const knexConfig = require("./knexfile");
const db = knex(knexConfig.development);

module.exports = {
    get:function(){
        const query = db("actions");
        return query;
    },
    getID:function(id){
        const query = db("actions").select().where("id",id).first();
        return query;
    },
    insert:function(data){
        const query =  db("actions").insert(data);
        return query;
    },
    update:function(id,name){
        const query =  db("actions").where({"actions_ID":id}).update({name});
        return query;
    },
    delete:function(id){
        const query =  db("actions").where({"actions_ID":id}).delete();
        return query;
    }
};