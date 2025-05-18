import { ContactFormData } from '../components/contact';

export function sendEmail(data: ContactFormData) {
  const apiEndpoint = '/api/contactUs';

  return fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json());
}
