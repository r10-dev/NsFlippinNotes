

export class Project {
    city: string;
    cloudinary_publicid: string;
    created_at: Date;
    id: number;
    project_name: string;
    state: string;
    street_address: string;
    updated_at: string;
    user_authentication: string;
    zip_code: string;
    notes: string;
    expenses: Expense[];
    rooms: Room[];
    tasks: Task[];
    purchase_price: number;
    total_expenses: number;
    sale_price: number;
    gross_profit: number;
    net_profit: number;

}

export class Room {
    id: number;
    room_name: string;
    length: number;
    width: number;
    converted: boolean;
    wall_height: number;
    wall_length: number;
    linear_feet_floor: number;
    area: number;
    perimeter: number;
    sqft_wall: number;
    notes: string;
    created_at: Date;
    updated_at: Date;
    project: number;
    expenses: Expense[];
    tasks: Task[];
    room_pic: string;



}
export class Expense {
    id: number;
    item_name: string;
    description: string;
    price: number;
    category: string;
    task: number;
    project: number;
    rooms: number;
    created_at: Date;
    updated_at: Date;
}

export class Task {
    id: number;
    task_name: string;
    task_notes: string;
    description: string;
    task_type: string;
    deleted: boolean;
    created_at: Date;
    updated_at: Date;

}
