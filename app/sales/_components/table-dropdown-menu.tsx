import { Button } from "@/app/_components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import { Product } from "@prisma/client";
import { MoreHorizontalIcon, TrashIcon, Clipboard } from "lucide-react";

interface SaleTableDropdownMenuProps {
  product: Pick<Product, "id">;
  onDelete: (productId: string) => void;
}

const SaleTableDropdownMenu = ({
  product,
  onDelete,
}: SaleTableDropdownMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <MoreHorizontalIcon size="16" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Ações</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer gap-1.5"
          onClick={() => navigator.clipboard.writeText(product.id)}
        >
          <Clipboard size={16} />
          Copiar ID
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onDelete(product.id)}
          className="cursor-pointer gap-1.5"
        >
          <TrashIcon size={16} />
          Deletar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SaleTableDropdownMenu;
