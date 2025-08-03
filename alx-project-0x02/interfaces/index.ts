import { DevBundlerService } from "next/dist/server/lib/dev-bundler-service"

export interface CardProps {
    title: string,
    content: [string]
}
export interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: { title: string; content: string}) => void;


}

export interface ButtonProps {
    size :  "small" | "medium" | "large";
    shape: "rounded-sm" | "rounded-md" | "rounded-full";
}

export interface PostProps {
    title: string;
    content: string;
    userId: number;
}

export interface PostPageProps {
    posts: PostProps[];
   
}

export interface UserPageProps {
     users: UserProps[];
}

export interface UserProps {
    id: number;
    
    name: string;
    email:  string;
    address: {
        street: string;
        suite: string;
        city: string;

    };
}