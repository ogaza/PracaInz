angular.module('app')
  .factory('postsService',
    function () {
      var posts = []
      var post
      var comments
      var j

      var lastPostId = 0
      var lastCommentId = 0

      for (var i = 1; i <= 5; i++) {

        j = 1

        comments = [{
          id: ++lastCommentId,
          author: 'author ' + i + j,
          date: new Date(),
          content: 'content ' + i + j++
        },
        {
          id: ++lastCommentId,
          author: 'author ' + i + j,
          date: new Date(),
          content: 'content ' + i + j
        }]

        post = {
          id: i,
          // author: "Author " + i,
          text: 'this is post ' + i,
          dateAdded: new Date(),
          comments: comments
        }

        posts.push(post)

        lastPostId = i
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

          return { "id": post.id, "text": post.text, "comments": post.comments }
        },
        save: function (post) {
          if (!post.id) {
            post.id = ++lastPostId
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
        },
        saveComment: function (postId, comment) {
          var post = this.get(postId)

          if (!comment.id) {
            comment.id = ++lastCommentId
            post.comments.push(comment)
            return
          }

          var idAsInt = parseInt(comment.id)

          var commentToEdit = post.comments.find(function (elem) {
            return elem.id === idAsInt
          })

          commentToEdit.content = comment.content
        },
        deleteComment: function (postId, commentId) {
          var post = this.get(postId)

          if (!post || !post.comments) {
            console.log('could not remove a comment')
            return
          }

          var commentIdAsInt = parseInt(commentId)

          var idx = post.comments.findIndex(function (elem) {
            return elem.id === commentIdAsInt
          })

          if (idx < 0) return

          post.comments.splice(idx, 1)
        }
      }
    })
