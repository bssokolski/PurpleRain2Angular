export interface Day{
    DayID?: number;
    OwnerID?: number;
    DayName: string;
    Date:string;
    OutfitID?: number;  //foreign key
    GoalID?: number;    // foreign key
    Outfit: string; // virtual
    Goal: string; //virtual
    //public virtual Outfit Outfit { get; set; }
    //public virtual Goal Goal{ get; set; }
}