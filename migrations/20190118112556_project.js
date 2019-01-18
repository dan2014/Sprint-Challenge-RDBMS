

exports.up = function(knex, Promise) {
    return knex.schema.createTable("projects",function(tbl){
      // Primary key
      tbl.increments("id");
  
      // Other fields
      tbl
      .string("name",255)
      .notNullable();

      tbl
      .string("description",1024)
      .notNullable();
        
      tbl
      .boolean("completed")
      .notNullable();

    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("projects");
  };