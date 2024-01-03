import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((data) => {
      const user = data[1]; // createUser() is the second promise, so its result is at index 1
      const profile = data[0];
      console.log(`${profile.body} ${user.firstName} ${user.lastName} `);
    })
    .catch(() => console.log('Signup system offline'));
}
