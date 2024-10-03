import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const [signUpResult, uploadResult] = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);

  return [
    { status: signUpResult.status, value: signUpResult.value || signUpResult.reason },
    { status: uploadResult.status, value: uploadResult.value || uploadResult.reason },
  ];
}
