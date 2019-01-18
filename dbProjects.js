const knex = require("knex");
const knexConfig = require("./knexfile");
const db = knex(knexConfig.development);

module.exports = {
    get:function(){
        const query = db("projects");
        return query;
    },
    getID:function(id){

        const query = db('projects as p').select().where("p.id",id).first();
        const actions = db('actions').select(["id","description","notes","completed"]).where("projectID",id);

        const promises = [query,actions];
        
        let response = Promise.all(promises).then(function(results) {
            let [project, actions] = results;
            project.actions = actions;
    
            return project
          });

        return response;
    },
    insert:function(data){
        const query =  db("projects").insert(data);
        return query;
    },
    update:function(id,data){
        const query =  db("projects").where({"id":id}).update(data);
        return query;
    },
    delete:function(id){
        const query =  db("projects").where(id).delete();
        return query;
    }
};