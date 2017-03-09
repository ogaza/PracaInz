angular.module('app')
  .factory('postsService',
    function () {
      var posts = []

      var lastId = 0

      for (var i = 1; i <= 5; i++) {
        posts.push({
          id: i,
          // author: "Author " + i,
          text: 'this is post ' + i,
          dateAdded: new Date()
        })

        lastId = i
      }

      return {
        getAll: function () {
          return posts
        },
        get: function (id) {
          var idAsInt = parseInt(id)

          var post = posts.find(function (elem) {
            return elem.id === idAsInt
          })

          return post
        },
        save: function (post) {
          if (!post.id) {
            post.id = ++lastId
            post.dateAdded = new Date()
            posts.push(post)
            return
          }

          var idAsInt = parseInt(post.id)

          var postToEdit = posts.find(function (elem) {
            return elem.id === idAsInt
          })

          postToEdit.text = post.text
        },
        remove: function (id) {
          var idAsInt = parseInt(id)

          var idx = posts.findIndex(function (elem) {
            return elem.id === idAsInt
          })

          if (idx < 0) return

          posts.splice(idx, 1)
        }
      }
    })
