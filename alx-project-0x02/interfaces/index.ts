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
    size : string;
    shape: string
}

