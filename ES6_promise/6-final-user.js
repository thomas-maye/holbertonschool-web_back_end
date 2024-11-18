/*eslint-disable*/
import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const signUp = signUpUser(firstName, lastName);
  const upload = uploadPhoto(fileName);

  const results = await Promise.allSettled([signUp, upload]);

  return results.map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason,
  }));
}