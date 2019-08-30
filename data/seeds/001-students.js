exports.seed = function(knex) {
 // Deletes ALL existing entries
 return knex('students').del()
   .then(function () {
     // Inserts seed entries
     return knex('students').insert([
       {id: 1, name: 'Cedric', course: "History" },
       {id: 2, name: 'Bob', course: "Math" },
       {id: 3, name: 'Dan', course: "Science" }
     ])
   })
}
