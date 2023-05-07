import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Comment } from '../../shared/models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  collectionName = 'Comments';

  constructor(private afs: AngularFirestore) { }

create(comment: Comment) {
  comment.id = this.afs.createId();
  return this.afs.collection<Comment>(this.collectionName).doc(comment.id).set(comment);
}

getAll() {
  return this.afs.collection<Comment>(this.collectionName).valueChanges();
}

delete(id: string) {
  return this.afs.collection<Comment>(this.collectionName).doc(id).delete();
}

getCommentsByImagedId(imageId: string){
  return this.afs.collection<Comment>(this.collectionName, ref => ref.where('imageId', '==', imageId).orderBy('date', 'asc')).valueChanges();
}

}
