// pages/api/session.js
import { getSession } from 'next-auth/react';

export default async (req, res) => {
  const session = await getSession({ req });
  console.log('sesso jklsadj;fkl jlakskl ;afs j;klfajin',session);
  if (session) {
    res.status(200).json({ user: session.user });
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};
