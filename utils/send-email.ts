import { ContactFormData } from '../components/contact';

export function sendEmail(data: ContactFormData) {
  const apiEndpoint = '/api/email';

  return fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json());
}
