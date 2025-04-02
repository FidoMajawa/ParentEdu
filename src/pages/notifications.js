import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #eff6ff, #f3e8ff);
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: white;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: bold;
  background: linear-gradient(to right, #2563eb, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NewMessageButton = styled(Link)`
  padding: 0.5rem 1rem;
  background: linear-gradient(to right, #3b82f6, #9333ea);
  color: white;
  border-radius: 9999px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

const CategoriesContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  gap: 1rem;
  scrollbar-width: none;
`;

const CategoryButton = styled.button`
  flex-shrink: 0;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  white-space: nowrap;
  transition: all 0.3s ease;
  background: ${({ active }) => (active ? 'linear-gradient(to right, #3b82f6, #9333ea)' : 'white')};
  color: ${({ active }) => (active ? 'white' : '#6b7280')};
  box-shadow: ${({ active }) => (active ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none')};
`;

const MessageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MessageCard = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  background-color: ${({ read }) => (read ? 'white' : '#e0f2fe')};
  transition: background-color 0.3s ease;
  border-radius: 8px;
`;

const MessageAvatar = styled.div`
  font-size: 2rem;
  padding: 0.5rem;
  background: linear-gradient(to right, #93c5fd, #a78bfa);
  border-radius: 9999px;
`;

const MessageDetails = styled.div`
  flex: 1;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Messages = () => {
  const messages = [
    { id: 1, sender: "Teacher Sarah", avatar: "👩🏫", subject: "Math Progress Update", preview: "Your child is doing great...", time: "2h ago", read: false, category: "academic" },
    { id: 2, sender: "School Principal", avatar: "👨‍🏫", subject: "Meeting Reminder", preview: "Don't forget the meeting...", time: "1d ago", read: true, category: "administrative" },
  ];

  const categories = [
    { id: "all", name: "All" },
    { id: "academic", name: "Academic" },
    { id: "administrative", name: "Administrative" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <Container>
      <Wrapper>
        <Header>
          <Title>Messages</Title>
          <NewMessageButton to="/compose">✏️ New Message</NewMessageButton>
        </Header>

        <CategoriesContainer>
          {categories.map((category) => (
            <CategoryButton key={category.id} onClick={() => setActiveCategory(category.id)} active={activeCategory === category.id}>
              {category.name}
            </CategoryButton>
          ))}
        </CategoriesContainer>

        <MessageList>
          {messages.filter(msg => activeCategory === "all" || msg.category === activeCategory).length > 0 ? (
            messages
              .filter(msg => activeCategory === "all" || msg.category === activeCategory)
              .map((message) => (
                <MessageCard to={`/messages/${message.id}`} key={message.id} read={message.read}>
                  <MessageAvatar>{message.avatar}</MessageAvatar>
                  <MessageDetails>
                    <h3 style={{ fontWeight: 'bold', color: message.read ? '#6b7280' : '#2563eb' }}>{message.sender}</h3>
                    <p style={{ color: '#6b7280' }}>{message.subject}</p>
                    <small style={{ color: '#6b7280' }}>{message.time}</small>
                  </MessageDetails>
                </MessageCard>
              ))
          ) : (
            <EmptyState>
              📭 No messages found
            </EmptyState>
          )}
        </MessageList>
      </Wrapper>
    </Container>
  );
};

export default Messages;
