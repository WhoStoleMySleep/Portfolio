import { NextResponse } from "next/server";
import { getAllBlogs } from './data';

export async function Get() {
  const blogs = await getAllBlogs();
  return NextResponse.json(blogs)
}