import "stream-chat";

declare module "stream-chat" {
  // Extend the CustomUserData interface to include the email property
  interface CustomUserData {
    email?: string;
  }
  interface CustomChannelData {
    name?: string;
  }
}
