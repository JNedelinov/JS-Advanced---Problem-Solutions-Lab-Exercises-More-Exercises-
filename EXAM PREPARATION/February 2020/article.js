// 2. Article

class Article {

    /*
        #idComments = 1;
        #idReplies = 1.1;
        #commentsObj = {};
        #comments = [];
        #likes = [];
    */

    constructor(...params) {
        this.title = params[0];
        this.creator = params[1];
        this._idComments = 1;
        this._idReplies = 1.1;
        this._commentsObj = {};
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this article!`;
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this article!`;
        }
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw Error("You can't like the same article twice!");
        } else if (this.creator === username) {
            throw Error("You can't like your own articles!");
        } else {
            this._likes.push(username);
            return `${username} liked ${this.title}!`;
        }
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw Error("You can't dislike this article!");
        } else {
            let indexOfUser = this._likes.indexOf(username);
            this._likes.splice(indexOfUser, 1);
            return `${username} disliked ${this.title}`;
        }
    }

    comment(username, content, id) {
        if (!this._commentsObj[id] || id === undefined) {
            if (id === undefined) {
                this._commentsObj[this._idComments] = {
                    id: this._idComments,
                    userName: username,
                    content: content,
                    replies: [],
                };
            } else {
                this._commentsObj[id] = {
                    id: this._idComments,
                    userName: username,
                    content: content,
                    replies: [],
                };
            }

            id === undefined ? this._comments.push(this._commentsObj[this._idComments]) : this._comments.push(this._commentsObj[id]);
            this._idComments += 1;
            return `${username} commented on ${this.title}`;
        } else {

            if (this._commentsObj[id].replies.length === 0) {
                this._commentsObj[id].replies.push({
                    id: id + 0.1,
                    userName: username,
                    content: content,
                });
            } else {
                let currMaxId = 0; // Math.max.call(null, ...this._commentsObj[id].replies);
                let arr = this._commentsObj[id].replies;
                for (let currObj of arr) {
                    let currId = currObj.id;
                    if (currId > currMaxId) {
                        currMaxId = currId;
                    }
                }

                this._commentsObj[id].replies.push({
                    id: currMaxId + 0.1,
                    userName: username,
                    content: content,
                });
            }

            return 'You replied successfully';
        }
    }

    toString(sortingType) {

        let result = [];

        result.push(`Title: ${this.title}`, `Creator: ${this.creator}`, `Likes: ${this._likes.length}`, 'Comments:')

        let sortedComments;

        if (sortingType === 'desc') {
            sortedComments = this._comments.sort((a, b) => {
                b.replies = b.replies.sort((a, b) => b.id - a.id);
                a.replies = a.replies.sort((a, b) => b.id - a.id);
                return b.id - a.id
            });
        } else if (sortingType === 'asc') {
            sortedComments = this._comments.sort((a, b) => {
                b.replies = b.replies.sort((a, b) => a.id - b.id);
                a.replies = a.replies.sort((a, b) => a.id - b.id);
                return a.id - b.id
            });
        } else if (sortingType === 'username') {
            sortedComments = this._comments.sort((a, b) => {
                b.replies = b.replies.sort((a, b) => a.userName.localeCompare(b.userName));
                a.replies = a.replies.sort((a, b) => a.userName.localeCompare(b.userName));
                return a.userName.localeCompare(b.userName);
            });
        }

        sortedComments.forEach(objComment => {
            let commRes = '-- ';
            if (objComment.replies.length === 0) {
                commRes += `${objComment.id}. ${objComment.userName}: ${objComment.content}`;
            } else {
                commRes += `${objComment.id}. ${objComment.userName}: ${objComment.content}`;
                objComment.replies.forEach(ObjReply => {
                    commRes += `\n--- ${ObjReply.id.toFixed(1)}. ${ObjReply.userName}: ${ObjReply.content}`;
                });
            }

            result.push(commRes);
        });

        return result.join('\n');
    }
}

let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));

// let art = new Article("My Article", "Anny");
// art.like("John"), "John liked My Article!"
// art.likes, "John likes this article!"
// /* art.dislike("Sally"), "You can't dislike this article!" */
// art.like("Ivan"), "Ivan liked My Article!"
// art.like("Steven"), "Steven liked My Article!"
// art.likes, "John and 2 others like this article!"
// art.comment("Anny", "Some Content"), "Anny commented on My Article"
// art.comment("Ammy", "New Content", 1), "You replied successfully"
// art.comment("Zane", "Reply", 2), "Zane commented on My Article"
// art.comment("Jessy", "Nice :)"), "Jessy commented on My Article"
// console.log(art.comment("SAmmy", "Reply@", 2), "You replied successfully");

// console.log(art.toString('asc'));