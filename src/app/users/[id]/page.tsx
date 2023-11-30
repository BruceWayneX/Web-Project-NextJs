"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface UserData {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  params: any;
}

async function getUser(id: number): Promise<UserData> {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();

  return data.data;
}

interface UserPagesProps {
  params: {
    id: number;
  };
}

const UserPages: React.FC<UserPagesProps> = ({ params }) => {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`https://reqres.in/api/users/${params.id}`);
      const data = await res.json();
      setUser(data.data);
    };

    fetchUser();
  }, [params.id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-header text-center">
            <img src={user.avatar} 
            width={200}ç
            height={200}
            style={{ borderRadius: "50%",
            maxWidth: "100%",
            height: "auto"
            }} 
            alt={user.email} 
            />
          </div>
          <div className="card-body text-center">
            <h1>User Details</h1>
            <div>
              <div>
                <h3>
                  {user.id} {user.first_name} {user.last_name}
                </h3>
                <p>{user.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPages
