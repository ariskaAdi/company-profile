type Post = {
  _id: string;
  id?: string;
  _createdAt: string;
  _updatedAt?: string;
  title: string;
  content: string;
  imageUrl: string;
};

export async function getPostDetailsById(postId: string): Promise<Post | null> {
  try {
    const response = await fetch(`/api/post/${postId}`, {
      method: "GET",
      cache: "no-store",
      next: { revalidate: 10 },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error(
        `API Error fetching post ${postId}:`,
        response.status,
        errorData.error
      );
      if (response.status === 404) {
        return null;
      }
      throw new Error(
        `Failed to fetch post: ${response.status} ${response.statusText}`
      );
    }

    const post: Post = await response.json();
    return post;
  } catch (error) {
    console.error(`Error in getPostDetailsById for postId ${postId}:`, error);
    return null;
  }
}
