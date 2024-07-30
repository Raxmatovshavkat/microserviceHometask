import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import fetch from 'node-fetch';

@Injectable()
export class AuthService {
  async create(createAuthDto: CreateAuthDto) {
    try {
      const response = await fetch('http://localhost:3001/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(createAuthDto),
      });
      if (!response.ok) {
        throw new Error('Failed to create user');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating user:', error);
      throw new Error('Could not create user');
    }
  }

  async findAll() {
    try {
      const response = await fetch('http://localhost:3001/user');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw new Error('Could not fetch users');
    }
  }

  async findOne(id: number) {
    try {
      const response = await fetch(`http://localhost:3001/user/${id}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch user with id ${id}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching user with id ${id}:`, error);
      throw new Error(`Could not fetch user with id ${id}`);
    }
  }

  async remove(id: number) {
    try {
      const response = await fetch(`http://localhost:3001/user/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`Failed to delete user with id ${id}`);
      }
      return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
      console.error(`Error deleting user with id ${id}:`, error);
      throw new Error(`Could not delete user with id ${id}`);
    }
  }
}
