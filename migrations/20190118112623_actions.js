
exports.up = function(knex, Promise) {
    return knex.schema.createTable("actions",function(tbl){
      // Primary key
      tbl.increments("id");
  
      // Other fields
      tbl
      .integer("projectID")
      .unsigned()
      .references("id")
      .inTable("projects");

      tbl
      .string("description",1024)
      .notNullable();

      tbl
      .string("notes",4096)
      .notNullable();
        
      tbl
      .boolean("completed")
      .notNullable();

    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("actions");
  };