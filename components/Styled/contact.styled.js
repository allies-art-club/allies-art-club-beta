import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 1rem;
  background: transparent;
  border-radius: 8px;
`;

const Input = styled.input`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    border-color: #0056b3;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;

  &:focus {
    border-color: #0056b3;
    outline: none;
  }
`;

const Button = styled.button`
  margin: 2rem;
  width: 100%;
  padding: 0.75rem;
  background: #ff25ab;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #d9128c;
  }
`;

export { Button, Textarea, Input, Form };
