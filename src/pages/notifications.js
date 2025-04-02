import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #eff6ff, #f3e8ff);
  padding: 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
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
`;

const CategoryButton = styled.button`
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  border-radius: 9999px;
  white-space: nowrap;
  transition: background-color 0.3s ease, color 0.3s ease;
  &.active {
    background: linear-gradient(to right, #3b82f6, #9333ea);
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  &.inactive {
    background: white;
    color: #6b7280;
  }
`;

const MessageCard = styled(Link)`
  display: flex;
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  transition: background-color 0.3s ease;
  &.unread {
    background-color: #e0f2fe;
  }
  &.read {
    background-color: white;
  }
`;

const MessageAvatar = styled.div`
  font-size: 2rem;
  margin-right: 1rem;
  padding: 0.5rem;
  background: linear-gradient(to right, #93c5fd, #a78bfa);
  border-radius: 9999px;
`;

const MessageDetails = styled.div`
  flex: 1;
`;

const MessageTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: bold;
  color: ${props => (props.read ? '#6b7280' : '#2563eb')};
`;

const MessageSubject = styled.h4`
  font-size: 1rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
`;

const MessagePreview = styled.p`
  color: #4b5563;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const MessageTime = styled.span`
  font-size: 0.75rem;
  color: #6b7280;
`;

const MessageStatus = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: #2563eb;
`;

const EmptyState = styled.div`
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
`;

const BottomNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

const BottomButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: white;
  border: 1px solid #d1d5db;
  color: #6b7280;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f3f4f6;
  }
`;

const Messages = () => {
  const messages = [
    {
      id: 1,
      sender: "Teacher Sarah",
      avatar: "👩🏫",
      subject: "Math Progress Update",
      preview: "Your child is doing great with addition! We're moving on to subtraction next week...",
      time: "2 hours ago",
      read: false,
      category: "academic"
    },
    {
      id: 2,
      sender: "School Principal",
      avatar: "👨‍🏫",
      subject: "Parent-Teacher Meeting",
      preview: "We'd like to schedule our quarterly parent-teacher meeting for...",
      time: "1 day ago",
      read: true,
      category: "administrative"
    },
    {
      id: 3,
      sender: "Art Teacher",
      avatar: "🎨",
      subject: "Art Project Update",
      preview: "Your child created a wonderful painting today! It will be displayed...",
      time: "3 days ago",
      read: true,
      category: "creative"
    },
    {
      id: 4,
      sender: "PE Teacher",
      avatar: "🏃‍♂️",
      subject: "Sports Day Reminder",
      preview: "Don't forget about our annual sports day coming up next Friday...",
      time: "5 days ago",
      read: false,
      category: "event"
    }
  ];

  const categories = [
    { id: "all", name: "All Messages" },
    { id: "academic", name: "Academic" },
    { id: "administrative", name: "Administrative" },
    { id: "creative", name: "Creative" },
    { id: "event", name: "Events" }
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <Container>
      <div className="max-w-4xl mx-auto">
        <Header>
          <div>
            <Title>Messages</Title>
            <p className="text-gray-600">Communications from teachers and school</p>
          </div>
          <NewMessageButton to="/compose">✏️ New Message</NewMessageButton>
        </Header>

        <CategoriesContainer>
          {categories.map(category => (
            <CategoryButton
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={activeCategory === category.id ? 'active' : 'inactive'}
            >
              {category.name}
            </CategoryButton>
          ))}
        </CategoriesContainer>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {messages
            .filter(msg => activeCategory === "all" || msg.category === activeCategory)
            .map(message => (
              <MessageCard
                to={`/messages/${message.id}`}
                key={message.id}
                className={message.read ? 'read' : 'unread'}
              >
                <div className="p-4 flex items-start">
                  <MessageAvatar>{message.avatar}</MessageAvatar>
                  <MessageDetails>
                    <div className="flex justify-between items-start">
                      <MessageTitle read={message.read}>{message.sender}</MessageTitle>
                      <MessageTime>{message.time}</MessageTime>
                    </div>
                    <MessageSubject>{message.subject}</MessageSubject>
                    <MessagePreview>{message.preview}</MessagePreview>
                  </MessageDetails>
                  {!message.read && <MessageStatus />}
                </div>
              </MessageCard>
            ))}
        </div>

        {messages.filter(msg => activeCategory === "all" || msg.category === activeCategory).length === 0 && (
          <EmptyState>
            <div className="text-5xl mb-4">📭</div>
            <h3>No messages found</h3>
            <p>You don't have any messages in this category</p>
          </EmptyState>
        )}

        <BottomNavigation>
          <BottomButton>← Older</BottomButton>
          <BottomButton>Newer →</BottomButton>
        </BottomNavigation>
      </div>
    </Container>
  );
};

export default Messages;
