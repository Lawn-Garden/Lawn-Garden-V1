import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '@/assets/Logo.svg'
import { LogoStyle } from '@/styles/LogoStyle'
import Wrapper from '@/styles/Wrapper'
import Button from '@/components/Button'
import Input from '@/components/Input'
import { SignText, TextButton } from '@/components/SignText'
import { signUp } from '@/api/auth'

export default function Join() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [githubId, setGithubId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      await signUp({ email, githubId, password });
      alert('회원가입 성공!');
      navigate('/');
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert('회원가입 실패');
    }
  };

  return (
    <Wrapper marginBottom>
        <LogoStyle src={Logo} />
        <Input placeholder='Email'
        value={email} onChange={(e) => setEmail(e.target.value)}/>
        <Input placeholder='Github ID'
        value={githubId} onChange={(e) => setGithubId(e.target.value)}/>
        <Input placeholder='PASSWORD'
        value={password} onChange={(e) => setPassword(e.target.value)}/>
        <Button onClick={handleSubmit}>SignUP</Button>
        <SignText color="#99BC85">이미 회원이신가요? 
          <TextButton onClick={() => navigate('/')}> 로그인</TextButton>
        </SignText>
      </Wrapper>
  )
}
