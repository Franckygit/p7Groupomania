const Post = require('../models/posts')
const fs = require("fs");

// Ajout d'un post dans la BDD
exports.getAllPosts = (req, res, next) => {
    Post
    .find()
    .then((posts) => {
        res.status(200).json(posts);
    })
    .catch((error) => {
        res.status(400).json({
          error: error,
        });
      });
};

exports.createPost = (req, res, next) => {
    const postObject = JSON.parse(req.body.post);
    delete postObject._id;
    const post = new Post({
        ...postObject,
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
        req.file.filename
        }`,
    });
    post
    .save()
    .then(() => res.status(201).json({ message: "Posté !" }))
    .catch((error) => res.status(400).json({ error }));
}

exports.modifyPost = (req, res, next) => {
    if (req.file) {
      Post.findOne({ _id: req.params.id })
        .then((post) => {
          const filename = post.imageUrl.split("/images/")[1];
          fs.unlink(`images/${filename}`, () => {
            const postObject = {
              ...JSON.parse(req.body.post),
              imageUrl: `${req.protocol}://${req.get("host")}/images/${
                req.file.filename
              }`,
            };
            Post.updateOne(
              { _id: req.params.id },
              { ...postObject, _id: req.params.id }
            )
              .then(() => res.status(200).json({ message: "Post modifié!" }))
              .catch((error) => res.status(400).json({ error }));
          });
        })
        .catch((error) => res.status(500).json({ error }));
    } else {
      const postObject = { ...req.body };
      Post.updateOne(
        { _id: req.params.id },
        { ...postObject, _id: req.params.id }
      )
        .then(() => res.status(200).json({ message: "Post modifié!" }))
        .catch((error) => res.status(400).json({ error }));
    }
};

exports.deletePost = (req, res, next) => {
    Post.findOne({ _id: req.params.id })
      .then((post) => {
        const filename = post.imageUrl.split("/images/")[1];
        fs.unlink(`images/${filename}`, () => {
          Post.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: "Post supprimé !" }))
            .catch((error) => res.status(400).json({ error }));
        })
      })
      .catch((error) => res.status(500).json({ error }));
  };

exports.likePost = (req, res) => {
    // Si le client Like cette sauce
    if (req.body.like === 1) {
      Post.findOne({ _id: req.params.id }).then((resultat) => { //recherche dans l'array des utilisateurs qui ont like
        if (resultat.usersLiked.includes(req.body.userId)) { //si l'utilisateur s'y trouve, on ne fait rien, puisqu'il a déjà like
          throw 'null';
        } else {
      Post.findOneAndUpdate( // sinon on comptabilise le like et on update le compteur
        { _id: req.params.id },
        { $inc: { likes: 1 }, $push: { usersLiked: req.body.userId } } // on incrémente et on push le user id dans l'array des utilisteurs qui ont like, pour empêcher la réitération
      )
        .then(() => res.status(200).json({ message: "Like ajouté !" }))
        .catch((error) => res.status(400).json({ error }))
    }})
      /* Si le client dislike cette sauce */
    } else if (req.body.like === -1) {
      Post.findOne({ _id: req.params.id }).then((resultat) => { //recherche dans l'array des utilisateurs qui ont dislike
        if (resultat.usersLiked.includes(req.body.userId)) { //si l'utilisateur s'y trouve, on ne fait rien, puisqu'il a déjà dislike
          throw 'null';
        } else {
      Post.findOneAndUpdate( // sinon on comptabilise le dislike et on update le compteur
        { _id: req.params.id },
        { $inc: { dislikes: 1 }, $push: { usersDisliked: req.body.userId } } // on incrémente et on push le user id dans l'array des utilisteurs qui ont like, pour empêcher la réitération
      )
        .then(() => res.status(200).json({ message: "Dislike ajouté !" }))
        .catch((error) => res.status(400).json({ error }))
      }})
      /* Si le client annule son choix */
    } else {
      Post.findOne({ _id: req.params.id }).then((resultat) => { // recherche dans l'array des utilisateurs qui ont like/dislike
        if (resultat.usersLiked.includes(req.body.userId)) { // s'il s'y trouve (oui), alors on décrémente et on update le compteur que ce soit un like ou un dislike
          Post.findOneAndUpdate(
            { _id: req.params.id },
            { $inc: { likes: -1 }, $pull: { usersLiked: req.body.userId } }
          )
            .then(() => res.status(200).json({ message: "Like retiré !" }))
            .catch((error) => res.status(400).json({ error }));
        } else if (resultat.usersDisliked.includes(req.body.userId)) {
          Post.findOneAndUpdate(
            { _id: req.params.id },
            { $inc: { dislikes: -1 }, $pull: { usersDisliked: req.body.userId } }
          )
            .then(() => res.status(200).json({ message: "Dislike retiré !" }))
            .catch((error) => res.status(400).json({ error }));
        }
      });
    }
  };